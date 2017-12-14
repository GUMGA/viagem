package io.gumga.viagem.api;

import io.gumga.viagem.application.service.ColaboradorService;
import io.gumga.viagem.domain.model.Colaborador;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMethod;
import io.gumga.presentation.RestResponse;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.validation.BindingResult;
import io.gumga.application.GumgaTempFileService;
import io.gumga.domain.domains.GumgaImage;
import io.gumga.presentation.GumgaAPI;
import org.springframework.web.bind.annotation.RequestMapping;
import java.io.IOException;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/colaborador")
@Transactional
public class ColaboradorAPI extends GumgaAPI<Colaborador, String> {

    @Autowired
    private GumgaTempFileService gumgaTempFileService;

    @Autowired
    public ColaboradorAPI(GumgaService<Colaborador, String> service) {
        super(service);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/foto")
    public String FotoUpload(@RequestParam MultipartFile foto) throws IOException {
        System.out.println("UPLOAD foto");
        GumgaImage gi = new GumgaImage();
        gi.setBytes(foto.getBytes());
        gi.setMimeType(foto.getContentType());
        gi.setName(foto.getName());
        gi.setSize(foto.getSize());
        String fileName = gumgaTempFileService.create(gi);
        return fileName;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/foto")
    public String FotoDelete(String fileName) {
        return gumgaTempFileService.delete(fileName);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/foto/{fileName}")
    public byte[] FotoGet(@PathVariable(value = "fileName") String fileName) {
        return gumgaTempFileService.find(fileName).getBytes();
    }

    @Transactional
    @RequestMapping(method = RequestMethod.POST)
    public RestResponse<Colaborador> save(@RequestBody @Valid Colaborador obj, BindingResult result) {
        if (obj.getFoto() != null) {
        obj.setFoto((GumgaImage) gumgaTempFileService.find(obj.getFoto().getName()));
        }
    return super.save(obj, result);
    }

    @Override
    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = "application/json")
    public RestResponse<Colaborador> update(String id, @RequestBody @Valid Colaborador obj, BindingResult result) {
        if (obj.getFoto()!= null) {
            if ("null".equals(obj.getFoto().getName())) {
                obj.setFoto(null);
            }else if (obj.getFoto().getSize() == 0) {
                obj.setFoto((GumgaImage) gumgaTempFileService.find(obj.getFoto().getName()));
            }
        }
    return super.update(id, obj, result);
    }
}