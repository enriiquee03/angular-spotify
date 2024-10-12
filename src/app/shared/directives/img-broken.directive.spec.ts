import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


//TODO
@Component({
    template: '<img class="testing-directive" appImgBroken [src]="srcMock">',
    standalone: true
})

class TestComponent {
  public srcMock:any = null

}


//TODO La prueba de ImgBroken es la siguiente

describe('ImgBrokenDirective', () => {
  let component:TestComponent
  let fixture:ComponentFixture<TestComponent>


  beforeEach(() =>{
    TestBed.configureTestingModule({
    imports: [ImgBrokenDirective,
        TestComponent]
})
    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })


  //TODO Deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('🔱🔱🔱 TEST COMPONENT DEBERIA INSTANCIARSE CORRECTAMENTE', () =>{
    expect(component).toBeTruthy()
  })

  it('🥶🥶🥶 DIRECTIVA DEBERIA CAMBIAR LA IMAGEN POR OTRA DEFAULT', (done :DoneFn) =>{
    //TODO ARRANGE
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src //TENEMOS LA URL ANTES DE SER CAMBIADA POR LA DIRECTIVA
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src //TENEMOS LA URL despues DE SER CAMBIADA POR LA DIRECTIVA

      expect(afterImgSrc).toEqual('http://localhost:9876/assets/images/img-broken.jpg')
      done()
    }, 3000);
  })

});
