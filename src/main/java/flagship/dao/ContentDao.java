package flagship.dao;

import java.util.List;

import flagship.vo.Content;

public interface ContentDao {
	public List<Content> selectList(int no) throws Exception;
	public void insert(Content content) throws Exception;
	public void updateState(Content content) throws Exception;
	public void updateTitle(Content content) throws Exception;
}
