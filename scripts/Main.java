import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class Main {
    public static void main(String[] args) throws Exception {
        int cnt = 1;

        final int N = 999901;

        while (cnt <= N) {
            String url = "YOUR_DATABASE_" + cnt;

            URL obj = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) obj.openConnection();

            connection.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

            StringBuffer response = new StringBuffer();
            String inputLine;

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine).append('\n');
            }

            in.close();

            BufferedWriter writer = new BufferedWriter(new FileWriter(new File(cnt + ".txt")));
            writer.write(response.toString());
            writer.close();

            cnt += 100;

            Thread.sleep(2000);
        }
    }
}
