package flagship.vo;

import java.io.Serializable;
import java.sql.Date;

public class Point implements Serializable{
  private static final long serialVersionUID = 1L;
  protected int no;
  protected double lat;
  protected double lng;
  protected Date pdate;
  protected int state;
	
  protected Location location;
  protected Transport transport;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public double getLat() {
		return lat;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
	public double getLng() {
		return lng;
	}
	public void setLng(double lng) {
		this.lng = lng;
	}
	public Date getPdate() {
		return pdate;
	}
	public void setPdate(Date pdate) {
		this.pdate = pdate;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	public Transport getTransport() {
		return transport;
	}
	public void setTransport(Transport transport) {
		this.transport = transport;
	}
	@Override
  public int hashCode() {
	  final int prime = 31;
	  int result = 1;
	  long temp;
	  temp = Double.doubleToLongBits(lat);
	  result = prime * result + (int) (temp ^ (temp >>> 32));
	  temp = Double.doubleToLongBits(lng);
	  result = prime * result + (int) (temp ^ (temp >>> 32));
	  result = prime * result + ((location == null) ? 0 : location.hashCode());
	  result = prime * result + no;
	  result = prime * result + ((pdate == null) ? 0 : pdate.hashCode());
	  result = prime * result + state;
	  result = prime * result + ((transport == null) ? 0 : transport.hashCode());
	  return result;
  }
	@Override
  public boolean equals(Object obj) {
	  if (this == obj)
		  return true;
	  if (obj == null)
		  return false;
	  if (getClass() != obj.getClass())
		  return false;
	  Point other = (Point) obj;
	  if (Double.doubleToLongBits(lat) != Double.doubleToLongBits(other.lat))
		  return false;
	  if (Double.doubleToLongBits(lng) != Double.doubleToLongBits(other.lng))
		  return false;
	  if (location == null) {
		  if (other.location != null)
			  return false;
	  } else if (!location.equals(other.location))
		  return false;
	  if (no != other.no)
		  return false;
	  if (pdate == null) {
		  if (other.pdate != null)
			  return false;
	  } else if (!pdate.equals(other.pdate))
		  return false;
	  if (state != other.state)
		  return false;
	  if (transport == null) {
		  if (other.transport != null)
			  return false;
	  } else if (!transport.equals(other.transport))
		  return false;
	  return true;
  }
	@Override
  public String toString() {
	  return "Point [no=" + no + ", lat=" + lat + ", lng=" + lng + ", pdate="
	      + pdate + ", state=" + state + ", location=" + location
	      + ", transport=" + transport + "]";
  }
	
	
}
