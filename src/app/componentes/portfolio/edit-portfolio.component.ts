import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { Portfolio } from 'src/app/model/portfolio';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent {

  nombre = '';
  titulo = '';
  introduccion = '';
  footer = '';
  imagen = '';
  file!: File;
  imgRef!: StorageReference;


  constructor(
    private portfolioService: PortfolioService, 
    private toastr: ToastrService,
    private storage: Storage
  ) { }

  onFileSelected($event: any){
    this.file = <File>$event.target.files[0];
    this.imgRef = ref(this.storage, `images/${this.file.name}`);
  }

  onUpload(): void {
    if(this.file != undefined){
      uploadBytes(this.imgRef, this.file)
        .then(async response => {
          console.log("Imagen subida correctamente.")
          this.imagen = await getDownloadURL(this.imgRef);
          this.onUpdate();
        })
        .catch(error => console.log(error));
    }else{
      this.onUpdate();
    }
  }

  onUpdate(): void{
    const portfolio = new Portfolio(
      this.nombre, 
      this.titulo,
      this.introduccion,
      this.imagen,
      this.footer);
    this.portfolioService.update(portfolio).subscribe(
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
