import Component from '../common/Component';
Component({
  props: {
    thumb:'',
    className:'',
    title: '',
    subTitle:'',
    onClick: function onClick() {},
    arrow: true
  },
  methods: {
    onCardClick: function onCardClick() {
      const {info, onClick} = this.props;
      onClick({ info: info });
    }
  }
});