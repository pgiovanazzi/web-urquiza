<template>
  <div>
    <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import List from "@ckeditor/ckeditor5-list/src/list";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";

export default {
  name: "CKEditor",
  props: {
    contentData: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      content: this.contentData,
      editor: ClassicEditor,
      editorConfig: {
        placeholder: "Escribir el contenido aquí...",
        plugins: [
          Essentials,
          Alignment,
          Bold,
          Italic,
          Underline,
          Paragraph,
          Heading,
          List,
          Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          ImageResize,
          CKFinder
        ],
        toolbar: {
          items: [
            "heading",
            "|",
            "alignment",
            "bold",
            "italic",
            "underline",
            "bulletedList",
            "numberedList",
            "imageUpload",
            "undo",
            "redo"
          ]
        },
        image: {
          toolbar: [
            "imageTextAlternative",
            "|",
            "imageStyle:alignLeft",
            "imageStyle:full",
            "imageStyle:alignRight"
          ],

          styles: [
            // This option is equal to a situation where no style is applied.
            "full",

            // This represents an image aligned to the left.
            "alignLeft",

            // This represents an image aligned to the right.
            "alignRight"
          ]
        },
        ckfinder: {
          uploadUrl: "/su/panel/api/ckeditor-content-files",
          options: {
            resourceType: "Images"
          }
        }
      }
    };
  },
  watch: {
    content: "uploadContent",
    contentData: "resetContent"
  },
  methods: {
    uploadContent() {
      this.$store.commit("SET_EDITOR_CONTENT", this.content);
    },
    async resetContent() {
      this.content = this.contentData;
      await this.$nextTick();
    }
  }
};
</script>

<style>
p {
  margin: 0;
}
</style>