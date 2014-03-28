package flagship.dao;

import java.util.List;

import flagship.vo.Location;

public interface LocationDao {
	public List<Location> selectAll() throws Exception;
	public List<Location> selectList(int no) throws Exception;
	
	public Location selectOne(int no) throws Exception;
	public void insert(Location location) throws Exception;
	public void updateTitle(Location location) throws Exception;
	public void updateDesc(Location location) throws Exception;
	
}
