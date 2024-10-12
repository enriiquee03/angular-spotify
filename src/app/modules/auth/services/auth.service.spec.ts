import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json'
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Prueba del sendCredentials

  it('Debe de retornar un objecto con "data" y "tokenSession', (done:DoneFn)=> {

    const user : any = mockUser.userOk
    const mockResponse = {
      data : {},
      tokenSession : '0x0x0x0'
    }
    httpClientSpy.post.and.returnValue(
      of(mockResponse) // ya es observable
    ) //TODO  <------ Esto es lo que la api va a responder

    service.sendCredentials(user.email, user.password)
    .subscribe(response =>{
      const getProperties = Object.keys(response)
      expect(getProperties).toContain('data')
      expect(getProperties).toContain('tokenSession')
      done()
      console.log('🪐🪐🪐🪐🪐🪐🪐',response)
    })
  })

    it('TEST DE SUMA DE 2 + 3', () =>{
      const a = 2
      const b = 3

      const c = a +b
      expect(c).toEqual(5)
    })
});
