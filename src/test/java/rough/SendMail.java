package rough;

import java.net.InetAddress;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import utils.MonitoringMail;
import utils.TestConfig;

public class SendMail {

	static String messageBody;
	
	public static void main(String[] args) throws AddressException, MessagingException {		

		try {
			System.out.println("System local host address : "+InetAddress.getLocalHost().getHostAddress());

			//Complete address of jenkins extent report
			//	http://localhost:8080/job/CarsSearchGuideCucumber/Extent_20Report/

			System.out.println("Jenkins Extent Report Path : ==============>>>>>>");
			messageBody="http://"+InetAddress.getLocalHost().getHostAddress()+":8080/job/CarsSearchGuideCucumber/Extent_20Report/";
		} catch (Exception e) {
			e.printStackTrace();
		}

		MonitoringMail moniter=new MonitoringMail();
		moniter.sendMail(TestConfig.server, TestConfig.from, TestConfig.to, TestConfig.subject, messageBody);

	}

}
