package flagship.dao;

import java.util.Map;

import flagship.vo.Member;

public interface MemberDao {
	public Member selectByEmailPassword(Map<String,String> paramMap)  
			throws Exception;
	public Member selectByEmail(Member member)  
			throws Exception;
	public void insert(Member member) throws Exception;
}
