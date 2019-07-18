Component({
  props: {
    className: '',
    disableScroll: true,
    visible:false,
    title:'',
    mask: true,
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText:'确认',
    cancelButtonText:'取消'
  },
  methods: {
    onModalClose() {
      const { onClose } = this.props;
      if (onClose) {
        onClose();
      }
    },
    onModalSure(){
      const { onConfirm } = this.props;
      if (onConfirm) {
        onConfirm();
      }
    }
  },
});
