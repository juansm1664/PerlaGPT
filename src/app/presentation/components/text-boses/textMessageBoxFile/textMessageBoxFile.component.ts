import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

export interface TextMessageEvent {
  prompt?: string | null;
  file: File;
}

@Component({
  selector: 'app-text-message-box-file',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textMessageBoxFile.component.html',
  styleUrl: './textMessageBoxFile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFileComponent {
  //Propiedades de entrada
  //Permite que el componente reciba un valor desde su componente padre.
  @Input() public placeholder: string = '';
  @Input() public disableCorrections: boolean = false;

  //Propiedades de salida
  //Permite que el componente emita un valor a su componente padre.
  @Output() public onMessage = new EventEmitter<TextMessageEvent>();

  //Inyección
  //Formulario reactivo para la validación de los campos de texto.
  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [],
    file: [null, Validators.required],
  });

  public file: File | undefined;

  hadleSelectedFile(event: any) {
    const file = event.target.files[0];
    this.form.controls.file.setValue(file);
    if (file) {
      this.file = file;
      console.log(file);
    }
  }

  //Método que se ejecuta al hacer click en el botón de enviar.
  //Valida que el campo de texto no esté vacío.
  hadleSubmit() {
    if (this.form.invalid) {
      return;
    }
    const { prompt, file } = this.form.value;

    this.onMessage.emit({ prompt, file: file! });
    this.form.reset();
  }
}
