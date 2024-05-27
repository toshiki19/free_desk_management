<template>
  <div>
    <h1>NFC Reader</h1>
    <p>Status: {{ status }}</p>
    <button @click="readNfc">Read NFC</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Waiting for NFC...",
    };
  },
  methods: {
    async readNfc() {
      try {
        if ("NDEFReader" in window) {
          const ndef = new NDEFReader();
          await ndef.scan();
          ndef.onreading = (event) => {
            const message = event.message.records[0];
            this.status = `NFC Tag Content: ${message.data}`;
          };
        } else {
          this.status = "NFC not supported on this device.";
        }
      } catch (error) {
        console.error("Error reading NFC:", error);
        this.status = "Error reading NFC.";
      }
    },
  },
};
</script>
