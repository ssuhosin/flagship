package flagship.controls;

import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import flagship.dao.PhotoDao;
import flagship.vo.JsonResult;
import flagship.vo.Photo;

@Controller
@RequestMapping("/photo")
public class PhotoControl {
	Logger log = Logger.getLogger(PhotoControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	PhotoDao photoDao;

	
//	@RequestMapping("/list")
//	public String list(Model model) throws Exception {
//		model.addAttribute("points", pointDao.selectAll());
//		return "point/list";
//	}
	
//	@RequestMapping(value="/ajax/list", produces="application/json")
//	public Object ajaxList() throws Exception {
//		List<Location> list =  locationDao.selectAll();
//		
//		try {
//			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
//					.setData(list);
//			
//		} catch (Throwable ex) {
//			return new JsonResult().setResultStatus(JsonResult.FAILURE)
//					.setError(ex.getMessage());
//		}
//	}

	@RequestMapping(value="/ajax/list", produces="application/json")
	public Object ajaxList(int no) throws Exception {
		List<Photo> list =  photoDao.selectList(no);
		
		try {
			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
					.setData(list);
			
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/ajax/add",method=RequestMethod.POST, produces="application/json")
	public Object ajaxAdd(Photo photo) throws Exception {
		try {
			photoDao.insert(photo);
			return new JsonResult()
				.setResultStatus(JsonResult.SUCCESS);
		} catch(Throwable ex) {
			return new JsonResult()
				.setResultStatus(JsonResult.FAILURE)
				.setError(ex.getMessage());
		}
	}
}