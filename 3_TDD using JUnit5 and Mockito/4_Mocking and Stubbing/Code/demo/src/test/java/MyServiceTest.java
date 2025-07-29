// import static org.junit.Assert.assertEquals;
// import static org.junit.Assert.assertNotNull;
// import static org.mockito.Mockito.verify;
// import static org.mockito.Mockito.when;

// import org.junit.Test;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;

// import com.example.ExternalAPI;
// import com.example.MyService;

// public class MyServiceTest {
//   @Mock
//   ExternalAPI externalAPI;
//   @InjectMocks
//   MyService myService;

//   @org.junit.Before
//   public void setUp() {
//     org.mockito.MockitoAnnotations.openMocks(this);
//   }

//   @Test
//   public void testExternalAPI(){
//     String mockData = "This is mock data";
//     when(externalAPI.getData()).thenReturn(mockData);

//     String result = myService.fetchData();

//     assertNotNull(result);
//     assertEquals(mockData, result);
//     verify(externalAPI).getData();
//   }
// }

import static org.junit.Assert.assertEquals;
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

    assertEquals(mockData, result);
  }
}
