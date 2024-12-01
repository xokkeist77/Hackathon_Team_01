import { Menu } from './core/menu'
import { Module } from './core/module'

import {ClicksModule} from "./modules/clicks.module";
import {ShapeModule} from "./modules/shape.module";
import {CountdownTimer} from "./modules/timer.module";
import {BackgroundModule} from "./modules/background.module";
import {SoundModule} from "./modules/sound.module";
import {CustomMessage} from "./modules/message.module";
import {ClearModule} from "./modules/clearBody.module";

export class ContextMenu extends Menu {
    constructor() {
        super();
        this.modules = []
        this.menu = document.getElementById('menu');
        this.renderCommands();
    }

    open() {
        this.menu.classList.add('open')
        this.menu.classList.add('nocopy')
    }

    renderCommands() {
        const commands = [
            { type: 'clickCounter', text: 'Считать клики (за 3 секунды)', emoji: '👆'  },
            { type: 'createShape', text: 'Создать фигуру', emoji: '🔶' },
            { type: 'createTimer', text: 'Запустить таймер', emoji: '⏱️' },
            { type: 'changeColor', text: 'Поменять цвет', emoji: '🌈' },
            { type: 'playSound', text: 'Проиграть звук', emoji: '🎶' },
            { type: 'showMessage', text: 'Показать сообщение', emoji: '💬' },
            { type: 'clearPage', text: 'Очистить страницу', emoji: '🤖' }
        ];

        const moduleConstructors = {
            'clickCounter': ClicksModule,
            'createShape': ShapeModule,
            'createTimer': CountdownTimer,
            'changeColor': BackgroundModule,
            'playSound': SoundModule,
            'showMessage': CustomMessage,
            'clearPage': ClearModule,
        };

        commands.forEach(command => {
            let module

            const Constructor = moduleConstructors[command.type] || Module;
            module = new Constructor(command.type, command.text, command.emoji);
            this.add(module);
            const item = document.createElement('li');
            item.innerHTML = module.toHTML();

            item.addEventListener('click', () => this.trigger(module));
            this.menu.appendChild(item);
        });
    }

    close() {
        this.menu.classList.remove('open')
    }

    add(module) {
        this.modules.push(module);
    }

    trigger(module) {
        try {
            module.trigger();
        } catch (error) {
            console.error(`Ошибка при выполнении модуля ${module.type}:`, error);
        }
        this.close();
    }
}