import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-text-message-box',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './textMessageBox.component.html',
  styleUrl: './textMessageBox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxComponent {

  //Propiedades de entrada
  //Permite que el componente reciba un valor desde su componente padre.
  @Input() public placeholder: string = '';
  @Input() public disableCorrections: boolean = false;

  //Propiedades de salida
  //Permite que el componente emita un valor a su componente padre.
  @Output() public onMessage =  new EventEmitter<String>();

  //Inyección
  //Formulario reactivo para la validación de los campos de texto.
  public fb =  inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required]
  });

  //Método que se ejecuta al hacer click en el botón de enviar.
  //Valida que el campo de texto no esté vacío.
  hadleSubmit() {
    if(this.form.invalid){
      return
    }
    const { prompt } = this.form.value;
    console.log(prompt);

    this.onMessage.emit(prompt ?? '');
    this.form.reset();
  }

}
