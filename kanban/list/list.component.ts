import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterForm } from './registerForm.model';
// import { Members } from './members.model';
// import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material';
// import { COMMA, TAB, SPACE, ENTER } from '@angular/cdk/keycodes';
// import { MatChipInputEvent } from '@angular/material';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  [x: string]: any;
  data: any;
  terms!: string;
  searchText !: string ;
  exampleArray !: string [];
  list_data: any;
  array!: string[] ;
  list_data2 = [];
  id: any;
  constructor(private httpService: HttpClient , private router: Router) {
    this.url = 'http://localhost:3000/registerForm';
  }
  get f() { return this.registerForm.controls; }
   ngOnInit() {
    // let formData: any;
    // formData = {id: 2, code: 2, title: 'A', members: []};
    // this.get_Batch(formData);
    this.registerForm =  new FormGroup({

      title: new FormControl(null),
      batch_id:  new FormControl(null),
      members: new FormControl(null),

  });
    this.httpService.get<RegisterForm[]>('http://localhost:3000/registerForm').subscribe((response: any[]) => {
      this.data = response;
  });
  }
onSubmit() {
  for (const v of this.data) {
    if (v.id !== 1) {
       let j = 0;
       for (const c of v.members) {
         j++;
         console.log('members', c);
       }
       v.count = j;
    }
  }
    // this.httpService.put<RegisterForm[]>('http://localhost:3000/registerForm/' + value.id, j).subscribe(
    //       (response: RegisterForm[]) => {
    //       // console.log('Onsubmit data', this.data, response) ;
    //       if (response.length) {
    //     this.list_data = response.filter(res => res.code !== 1) ;
    //      // this.data = response;
    //     }
    //       }
    //       );
  // let test_data =  {
  //   title: 'Batch1',
  //   batch_id: '001',
  //   members: [
  //     {
  //       name: 'Ajith',
  //       memberId: '1246',
  //       email: 'ajith@gmail.com',
  //       contactNo: '8825662728'
  //     },
  //     {
  //       name: 'Jeeva',
  //       memberId: '1247',
  //       email: 'jeeva@gmail.com',
  //       contactNo: '8825662728'
  //     }
  //   ],
  //   // id: 2
  // };

   // this.data = response;
  this.httpService.put<RegisterForm[]>('http://localhost:3000/registerForm/1', this.data[0]).subscribe() ;

  const num = this.data.filter( (res: { code: number; }) => res.code !== 1) ; // this.data = response;
  for ( const value of num) {
  this.httpService.put<RegisterForm[]>('http://localhost:3000/registerForm/' + value.id, value).subscribe(
      (response: RegisterForm[]) => {
      // console.log('Onsubmit data', this.data, response) ;
      if (response.length) {
    this.list_data = response.filter(res => res.code !== 1) ;
     // this.data = response;
      }
      }
      );
    }
  // }}
  this.router.navigate(['kanban']);

}
  //
ontitle() {
    this.registerForm.value.members = [];
    this.data = this.registerForm.value;
    console.log('ontitle', this.registerForm.value.title);
    // for (const a of this.data) {
    //   console.log(a);
    // }
    this.httpService.post<RegisterForm>('http://localhost:3000/registerForm', this.data).subscribe();
    location.reload();
    // this.registerForm.clear();

    }
  // get_Batch(input_para: any) {
  //   this.httpService.get<any>('http://localhost:3000/registerForm').subscribe((response: any[]) => {
  //   //  this.data = response;
  //   this.save_Batch(response, input_para);
  //  });
  // }

  // save_Batch(input_para: any, formData: any) {
  //   console.log('Save_Batch1', input_para, formData);
  //   if (input_para) {
  //     console.log('Save_Batch2', input_para, formData);
  //     input_para.push(formData);
  //     this.httpService.post<any>('http://localhost:3000/registerForm', input_para).subscribe((response: any[]) => {
  //       console.log('Onsubmit data', this.data, response) ;
  //       if (response.length) {
  //       this.input_para = response.filter(res => res.code !== 1) ; // this.data = response;
  //       }
  //         }) ;
  //   }


  // }

drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      event.previousContainer.data[event.previousIndex] = event.previousContainer.data[event.previousIndex++];
      // let i = 0;
      // let j = 0;
    //   this.httpService.post<any>('http://localhost:3000/registerForm', event.container.data).subscribe((response: any[]) => {
    //   this.data = response;
    // });

    }
      // const num = this.data.filter( (res: { code: number; }) => res.code !== 1) ; // this.data = response;
    // for ( const value of this.data) {
    // this.httpService.put<RegisterForm[]>('http://localhost:3000/registerForm//members', value.title).subscribe(
    //     (response: RegisterForm[]) => {
    //     // console.log('Onsubmit data', this.data, response) ;
    //     if (response.length) {
    //   this.list_data = response.filter(res => res.code !== 1) ;
    //    // this.data = response;
    //   }
    //     }
    //     );
      // this.registerForm.value.members.batch = this.data[1].title;
      // this.registerForm.value.members.batch = this.registerForm.value.title;

      // console.log('extra', this.registerForm.value.members.batch);

      // for (const val1 of event.previousContainer.data) {
      //   // console.log( val1);
      //   // i++;
      //  }

        // tslint:disable-next-line:align
        // console.log( i);
      // for (const val2 of event.container.data) {
      //   // console.log( val2);
      //   // j++;
      //  }
      // console.log( j);

      console.log('dropdata', this.data);
    // this.onSubmit();

  }
}

