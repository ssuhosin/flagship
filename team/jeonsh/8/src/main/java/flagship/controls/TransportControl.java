package flagship.controls;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import flagship.dao.PointDao;
import flagship.dao.TransportDao;
import flagship.vo.JsonResult;
import flagship.vo.Transport;

@Controller
@RequestMapping("/transport")
public class TransportControl {
	Logger log = Logger.getLogger(TransportControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	PointDao pointDao;

	@Autowired(required=false)
	TransportDao transportDao;
	
	@RequestMapping(value="/ajax/add",method=RequestMethod.POST, produces="application/json")
	public Object ajaxAdd(Transport transport) throws Exception {
		try {
			transportDao.insert(transport);
			return new JsonResult()
				.setResultStatus(JsonResult.SUCCESS);
		} catch(Throwable ex) {
			return new JsonResult()
				.setResultStatus(JsonResult.FAILURE)
				.setError(ex.getMessage());
		}
	}
}