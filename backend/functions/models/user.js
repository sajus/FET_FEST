function User(data) {
    this.name = data.name;
    this.mobile = data.mobile;
    this.blood_group = data.blood_group;
    this.current_address_geopoint = data.current_address_geopoint;
    this.current_address_text = data.current_address_text;
    this.permanent_address_geopoint = data.permanent_address_geopoint;
    this.permanent_address_text = data.permanent_address_text;
    this.status = data.status;
}

module.exports = User;