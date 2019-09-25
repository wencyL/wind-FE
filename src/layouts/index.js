import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'dva';
function BasicLayout(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
function mapStateToProps(state) {
  return state.app;
}

export default BasicLayout;
