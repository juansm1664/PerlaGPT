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

interface Option {
  id: number | string;
  text: string;
}

export interface TextMessageBoxEvent {
  prompt: string;
  selectedOption: String;
}

@Component({
  selector: 'app-text-message-box-select',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textMessageBoxSelect.component.html',
  styleUrl: './textMessageBoxSelect.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxSelectComponent {
  //Propiedades de entrada
  //Permite que el componente reciba un valor desde su componente padre.
  @Input() public placeholder: string = '';
  @Input({ required: true }) options: Option[] = [];

  //Propiedades de salida
  //Permite que el componente emita un valor a su componente padre.
  @Output() public onMessage = new EventEmitter<TextMessageBoxEvent>();

  //Inyección
  //Formulario reactivo para la validación de los campos de texto.
  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required],
    selectedOption: ['', Validators.required],
  });

  //Método que se ejecuta al hacer click en el botón de enviar.
  //Valida que el campo de texto no esté vacío.
  hadleSubmit() {
    if (this.form.invalid) {
      return;
    }
    const { prompt, selectedOption } = this.form.value;
    console.log(prompt);

    this.onMessage.emit({ prompt: prompt!, selectedOption: selectedOption! });
    this.form.reset();
  }
}
