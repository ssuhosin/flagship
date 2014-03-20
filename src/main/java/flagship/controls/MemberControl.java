package flagship.controls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import flagship.dao.MemberDao;
import flagship.vo.JsonResult;
//import flagship.dao.MemberDao;
import flagship.vo.Member;

@Controller
@RequestMapping("/member")
@SessionAttributes("loginUser") // 모델에 들어 있는 값 중에서 loginUser는 세션에 보관하라.
public class MemberControl {
	@Autowired(required=false)
	MemberDao memberDao;
	
	
	@RequestMapping(value="/ajax/join",method=RequestMethod.POST,produces="application/json")
	public Object login(Member member) throws Exception {
		try {
			if(memberDao.selectByEmail(member) != null) {
				return new JsonResult().setResultStatus(JsonResult.FAILURE)
						.setError("이미 해당 이메일은 존재합니다.");
			} else {
				memberDao.insert(member);
				return new JsonResult().setResultStatus(JsonResult.SUCCESS);
			}
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
  }
}










