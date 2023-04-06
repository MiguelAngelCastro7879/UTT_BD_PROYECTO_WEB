import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraphsService } from 'src/app/graphs.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphComponent {
  chart: any = []
  constructor(private peticion: GraphsService){
    Chart.register(...registerables)
  }
  
  changeDescription(grafica: string) {
    this.chart.destroy();
    switch (grafica) {
      case "EvWeek":
        this.getDataWithEvWeek();
        break;
      case "Tech":
        this.getDataWithTech();
        break;
      case "Evsirebreed":
        this.getDataWithEvsirebreed();
        break;
      case "Brd":
        this.getDataWithBrd();
        break;
      case "Ageda":
        this.getDataWithAgeda();
        break;
      case "BredREas":
        this.getDataWithBredREas();
        break;
      case "Date":
        this.getDataWithDate();
        break;
      case "Pen":
        this.getDataWithPen();
        break;
      case "ConcepRate":
        this.getDataWithConcepRate();
        break;
      default:
        this.getDataWithBarnNm();
        break;
    }
  };

  ngOnInit(){
    this.getDataWithEvWeek()
  }
  
  public renderTable(labels: any, data:any, name: string, color: string){
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
            {
              data: data,
              label: name,
              borderColor: color,
              backgroundColor: color,
            }
          ]
        },
      options: {
        scales: {
          x: {
            display: true,
            beginAtZero: true
          },
          y: {
            display: true
          }
        }
      }
    });
  }

  public getDataWithEvWeek(){
    this.peticion.getDataWithEvWeek  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "EvWeek Totales", "#0000FF")
    });
  }
  public getDataWithTech(){
    this.peticion.getDataWithTech  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "Tech Totales","#28fc03")
    });
  }
  public getDataWithEvsirebreed(){
    this.peticion.getDataWithEvsirebreed  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "Evisrebreed Totales","#fc0303" )
    });
  }
  public getDataWithBrd(){
    this.peticion.getDataWithBrd  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "Brd Totales","#03f8fc")
    });
  }
  public getDataWithAgeda(){
    this.peticion.getDataWithAgeda  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "Ageda Totales","#f8fc03")
    });
  }
  public getDataWithBredREas(){
    this.peticion.getDataWithBredREas  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "BreadEas Totales", "#fc8c03")
    });
  }
  public getDataWithDate(){
    this.peticion.getDataWithDate  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "Fechas Totales", "#03d7fc")
    });
  }
  public getDataWithPen(){
    this.peticion.getDataWithPen  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "Pen Totales", "#7e42b3")
    });
  }
  public getDataWithConcepRate(){
    this.peticion.getDataWithConcepRate  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "ConceptRate Totales","#82853d" )
    });
  }
  public getDataWithBarnNm(){
    this.peticion.getDataWithBarnNm  ().subscribe(arg => {
      const dates = arg.data.map((r:any)=>{
        return r._id
      })
      const counts = arg.data.map((r:any)=>{
        return r.count
      })

      // let inicio = dates.slice(0, mitad);
      this.renderTable(dates, counts, "BarnNM Totales", "#4e9180")
    });
  }
}
