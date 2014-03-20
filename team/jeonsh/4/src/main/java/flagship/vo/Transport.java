package flagship.vo;

import java.io.Serializable;

public class Transport implements Serializable{
  private static final long serialVersionUID = 1L;
  protected int no;
  protected int state;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	@Override
  public int hashCode() {
	  final int prime = 31;
	  int result = 1;
	  result = prime * result + no;
	  result = prime * result + state;
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
	  Transport other = (Transport) obj;
	  if (no != other.no)
		  return false;
	  if (state != other.state)
		  return false;
	  return true;
  }
	@Override
  public String toString() {
	  return "Transport [no=" + no + ", state=" + state + "]";
  }
	
	
}
