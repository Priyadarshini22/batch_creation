// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
// import { RegisterForm } from './list/registerForm.model';
// import { RegisterForm } from './list/registerForm.model';
// import { Members } from './list/members.model';
import { RegisterForm } from './list/registerForm.model';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RegisterForm } from './registerForm.model';
// import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material';
// import { COMMA, TAB, SPACE, ENTER } from '@angular/cdk/keycodes';
// import { MatChipInputEvent } from '@angular/material';
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  data: any;
  list_data: RegisterForm[] = [];
  constructor(private httpService: HttpClient) { }

   ngOnInit() {
    this.httpService.get<RegisterForm[]>('http://localhost:3000/registerForm').subscribe((response) => {
      this.list_data = response.filter(res => res.code !== 1) ;
      console.log('Output', this.list_data);
    }
          );
    // const num = this.data.filter( (res: { code: number; }) => res.code !== 1) ; // this.data = response;
    // for ( const value of num) {
    //       this.httpService.get<RegisterForm[]>('http://localhost:3000/registerForm/' + value.id).subscribe(
    //           (response: RegisterForm[]) => {
    //           console.log('Onsubmit data', this.data, response) ;
    //           if (response.length) {
    //         this.list_data = response ;
    //         // .filter(res => res.code !== 1) ; // this.data = response;
    //         }
    //           }
    //           );
    //       }

  // this.httpService.get<RegisterForm[]>('http://localhost:3000/registerForm', this.data).subscribe((response: RegisterForm[]) => {
  //   console.log('Onsubmit data', this.data, response) ;
  //   if (response.length) {
  // this.list_data = response.filter(res => res.code !== 1) ; // this.data = response;
  //   }
  //   }
  //   );
  }
    //   console.log('Onsubmit data', this.data, response) ;
    //   if (response.length) {
    // this.list_data = response.filter(res => res.code !== 1) ; // this.data = response;
    // }
    //   }
    //   );
    // this.data = response;
// // tslint:disable-next-line:semicolon
// })
  }
// onSubmit() {
//   this.httpService.post<RegisterForm[]>('http://localhost:3000/registerForm', this.data).subscribe(
//     (response: RegisterForm[]) => {
//     console.log('Onsubmit data', this.data, response) ;
//     if (response.length) {
//   this.list_data = response.filter(res => res.code !== 1) ; // this.data = response;
//   }
//     }
//     );


//   }
//   ontitle() {
//     this.router.navigate(['user-application']);
//     this.registerForm.value.members = [];
//     this.data = this.registerForm.value;
//     this.httpService.post<RegisterForm>('http://localhost:3000/registerForm', this.data).subscribe();
//     location.reload();
//     this.registerForm.clear();

//     }
//   // get_Batch(input_para: any) {
//   //   this.httpService.get<any>('http://localhost:3000/registerForm').subscribe((response: any[]) => {
//   //   //  this.data = response;
//   //   this.save_Batch(response, input_para);
//   //  });
//   // }

//   // save_Batch(input_para: any, formData: any) {
//   //   console.log('Save_Batch1', input_para, formData);
//   //   if (input_para) {
//   //     console.log('Save_Batch2', input_para, formData);
//   //     input_para.push(formData);
//   //     this.httpService.post<any>('http://localhost:3000/registerForm', input_para).subscribe((response: any[]) => {
//   //       console.log('Onsubmit data', this.data, response) ;
//   //       if (response.length) {
//   //       this.input_para = response.filter(res => res.code !== 1) ; // this.data = response;
//   //       }
//   //         }) ;
//   //   }


//   // }

//     drop(event: CdkDragDrop<string[]>) {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//     } else {
//       transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
//       // let i = 0;
//       // let j = 0;
//     //   this.httpService.post<any>('http://localhost:3000/registerForm', event.container.data).subscribe((response: any[]) => {
//     //   this.data = response;
//     // });

//       this.exampleArray = event.container.data;
//       // for (const val1 of event.previousContainer.data) {
//       //   // console.log( val1);
//       //   // i++;
//       //  }

//         // tslint:disable-next-line:align
//         // console.log( i);
//       // for (const val2 of event.container.data) {
//       //   // console.log( val2);
//       //   // j++;
//       //  }
//       // console.log( j);

//     }
//     console.log('dropdata', this.data);
//     // this.onSubmit();

//   }



