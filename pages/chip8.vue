<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title>Chip8 Emulator in WebAssembly</v-card-title>
        <v-card-text>
          <iframe src="/chip8wasm.html" width="640" height="320"></iframe>
          <p>
            Click emulator window to focus
          </p>
          <p>
            Press Q / E for left/right. Press W to fire
          </p>
          <p>
            Source: <a href="https://github.com/dustinbowers/chip8emu-wasm">https://github.com/dustinbowers/chip8emu-wasm</a>
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
