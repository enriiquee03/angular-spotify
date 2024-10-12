import { TrackModel } from './../../core/models/tracks.model';
import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json'

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('PROBANDO ENTRADA Y SALIDA DE VALORES', () =>{
    //arrange
    const pipe = new OrderListPipe()
    const {data} :any = (mockRaw as any).default

    //act
    const result : TrackModel[] = pipe.transform(data)

    //Assert
    expect(result).toEqual(result)
  })

  it('ORDENA DE MANERA CORRECTA ASCENDENTE', () =>{
    //arrange
    const pipe = new OrderListPipe()
    const {data} :any = (mockRaw as any).default
    const firstValue = data.find((i:any) => i._id === 7) //TODO 50 CENT
    const lastValue = data.find((i:any) => i._id === 6) //TODO TNT

    //act
    const result : TrackModel[] = pipe.transform(data,'name','asc')

    const firstResult = result[0]
    const lastResult = result[result.length-1]

    //Assert
    expect(firstResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)
  })


  it('ORDENA DE MANERA CORRECTA DESCENDENTE', () =>{
    //arrange
    const pipe = new OrderListPipe()
    const {data} :any = (mockRaw as any).default
    const firstValue = data.find((i:any) => i._id === 7) //TODO 50 CENT
    const lastValue = data.find((i:any) => i._id === 6) //TODO TNT

    //act
    const result : TrackModel[] = pipe.transform(data,'name','dsc')

    const firstResult = result[0]
    const lastResult = result[result.length-1]

    //Assert
    expect(firstResult).toEqual(lastValue)
    expect(lastResult).toEqual(firstValue)
  })



});
