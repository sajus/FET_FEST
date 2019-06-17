import React from "react";

export default class ComponentGenerator extends React.Component {

    createMarkup(data) {
        let  statData = '';
        data.forEach(function(item) {
            statData += item.content ;
        })
        return {__html: statData || ''};
    }


    render() {

        const {data} = this.props;

        if(data && data.length>0){

            return <div dangerouslySetInnerHTML={this.createMarkup(data)} />;

        } else {
            return null;
        }
    }
}
