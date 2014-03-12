package flagship.dao;

import java.util.List;

import flagship.vo.Location;

public interface LocationDao {
	public List<Location> selectAll() throws Exception;
}
