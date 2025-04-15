import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent } from '../../components/chat-bubbles/chatMessage/chatMessage.component';
import { MyMessageComponent } from '../../components/chat-bubbles/myMessage/myMessage.component';
import { TypingLoaderComponent } from '../../components/typingLoader/typingLoader.component';
import { TextMessageBoxComponent } from '../../components/text-boses/textMessageBox/textMessageBox.component';
import {
  TextMessageBoxFileComponent,
  TextMessageEvent,
} from '../../components/text-boses/textMessageBoxFile/textMessageBoxFile.component';
import {
  TextMessageBoxEvent,
  TextMessageBoxSelectComponent,
} from '../../components/text-boses/textMessageBoxSelect/textMessageBoxSelect.component';
@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {
  handleMessage(message: string) {
    console.log({ message });
  }

  handleMessageWhitFile(event: TextMessageEvent) {
    console.log({ event });
  }

  handleMessageWhitSelect(event: TextMessageBoxEvent) {
    console.log({ event });
  }
}
