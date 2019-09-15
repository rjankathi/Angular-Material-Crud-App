import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public snackBar: MatSnackBar) { }

  openSanckBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration : 2000
    });
  }
}
