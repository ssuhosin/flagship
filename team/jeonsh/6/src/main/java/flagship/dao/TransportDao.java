package flagship.dao;

import flagship.vo.Transport;

public interface TransportDao {
	public Transport selectOne(int no) throws Exception;
}
