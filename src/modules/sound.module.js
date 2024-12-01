import { Module } from "../core/module";
import { random } from "../utils";

export class SoundModule extends Module {

    trigger() {

        const arrayOfSounds = [
            {
                id: "1",
                url: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
            },
            {
                id: "2",
                url: "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg",
            },
            {
                id: "3",
                url: "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
            },
            {
                id: "4",
                url: "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a",
            },
            {
                id: "5",
                url: "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
            },
            {
                id: "6",
                url: "http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg",
            },
            {
                id: "7",
                url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav",
            },
            {
                id: "8",
                url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav",
            },
            {
                id: "9",
                url: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav",
            },
            {
                id: "10",
                url: "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3",
            },
        ];

        const countOfRandom = random(0, 9);

        const audio = new Audio(`${arrayOfSounds[countOfRandom].url}`);
        audio.play();
    }
}