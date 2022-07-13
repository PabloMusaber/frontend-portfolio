import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent {

  name = '';
  title = '';
  introduction = '';
  imagen!: File | '';
  footer = '';

  constructor(
    private portfolioService: PortfolioService, 
    private toastr: ToastrService
  ) { }

  onFileSelected(event: any){
    this.imagen = <File>event.target.files[0];
  }

  onUpdate(): void {
    const fd:any = new FormData();
    fd.append('name', this.name);
    fd.append('title', this.title);
    fd.append('introduction', this.introduction);
    fd.append('footer', this.footer);
    fd.append('imagen', this.imagen);
    
    this.portfolioService.update(fd).subscribe(
      data => {
        this.toastr.success('Portfolio Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          document.location.href="/";
        }, 2000);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  goBack(): void{
    document.location.href="/";
  }

}
