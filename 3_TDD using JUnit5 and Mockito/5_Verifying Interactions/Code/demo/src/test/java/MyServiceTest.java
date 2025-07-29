import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.mockito.Mockito;

import com.example.ExternalAPI;
import com.example.MyService;

public class MyServiceTest {
  @Test
  public void testExternalAPI(){
    String mockData = "This is mock data";
    ExternalAPI mockApi = Mockito.mock(ExternalAPI.class);
    when(mockApi.getData()).thenReturn(mockData);

    MyService service = new MyService(mockApi);
    String result = service.fetchData();

    verify(mockApi).getData();
  }
}
