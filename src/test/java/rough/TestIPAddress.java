package rough;

import java.net.InetAddress;

public class TestIPAddress {

	public static void main(String[] args) {

		try {
			System.out.println("System local host address : "+InetAddress.getLocalHost().getHostAddress());
			
			//Complete address of jenkins extent report
			//	http://localhost:8080/job/CarsSearchGuideCucumber/Extent_20Report/
			
			System.out.println("Jenkins Extent Report Path : ==============>>>>>>");
			System.out.println("http://"+InetAddress.getLocalHost().getHostAddress()+":8080/job/CarsSearchGuideCucumber/Extent_20Report/");
		} catch (Exception e) {
			e.printStackTrace();
		}


	}
}

