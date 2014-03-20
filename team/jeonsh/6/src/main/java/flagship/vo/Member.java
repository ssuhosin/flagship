package flagship.vo;

import java.io.Serializable;

public class Member implements Serializable {
  private static final long serialVersionUID = 1L;
	protected int no;
	protected String email;
	protected String pwd;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	@Override
  public int hashCode() {
	  final int prime = 31;
	  int result = 1;
	  result = prime * result + ((email == null) ? 0 : email.hashCode());
	  result = prime * result + no;
	  result = prime * result + ((pwd == null) ? 0 : pwd.hashCode());
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
	  Member other = (Member) obj;
	  if (email == null) {
		  if (other.email != null)
			  return false;
	  } else if (!email.equals(other.email))
		  return false;
	  if (no != other.no)
		  return false;
	  if (pwd == null) {
		  if (other.pwd != null)
			  return false;
	  } else if (!pwd.equals(other.pwd))
		  return false;
	  return true;
  }
	@Override
  public String toString() {
	  return "Member [no=" + no + ", email=" + email + ", pwd=" + pwd + "]";
  }
}
