import React, { Component } from "react";
import moment from "moment";

export default class App2 extends Component {
  state = {
    user: ["Fathur", "Izul", "Usamah", "Mujahid", "Fahri", "Musa", "Mbah Tono"],
    tugas: ["Adzan Subuh", "Iqomat Subuh", "Adzan Zhuhur", "Iqomat Zhuhur", "Adzan Ashar", "Iqomat Ashar", "Adzan Maghrib", "Iqomat Maghrib", "Adzan Isya", "Iqomat Isya"],
    hari: ["senin", "selasa", "rabu", "kamis", "jum'at", "sabtu", "ahad"],
    jadwal: [],
    durasi: 7,
  };
  componentDidMount() {
    this.allocate(this.state.durasi);
  }
  allocate = (durasi) => {
    const { user, tugas } = this.state;
    let jadwal = [];
    for (let i = 0; i < tugas.length * durasi; i++) {
      jadwal.push(user[i % user.length]);
    }
    this.setState({ jadwal });
  };
  onChange = (e) => {
    // this.setState({ durasi: e.target.value });
    this.allocate(e.target.value);
  };

  getDaysArray = (year, month) => {
    const monthIndex = month - 1;
    const names = Object.freeze(["sun", "mon", "tue", "wed", "thu", "fri", "sat"]);
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() == monthIndex) {
      result.push(`${date.getDate()}-${names[date.getDay()]}`);
      date.setDate(date.getDate() + 1);
    }
    return result;
  };
  render() {
    const { jadwal, tugas, hari, durasi } = this.state;
    let html = "";
    let haribaru = this.getDaysArray(2021, 6);
    jadwal.map((d, i) => {
      const x = i % 10;
      //   console.log(parseInt(i / 10) % hari.length);
      if (x == 0) {
        html += `<div class="row">
        <div class="col-md-1">${haribaru[parseInt(i / 10) % haribaru.length]}</div>
        <div class="col-md-1">${d}</div>`;
      } else if (x == 9) {
        html += `<div class="col-md-1">${d}</div></div>`;
      } else {
        html += `<div class="col-md-1">${d}</div>`;
      }
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">Jumlah Hari</div>
          <div className="col-md-2">
            <input type="number" onChange={this.onChange} defaultValue={durasi} />
          </div>
        </div>

        {/* menampilkan judul / header */}
        <div className="row">
          <div className="col-md-1">Hari/Tanggal</div>
          {tugas.map((t) => {
            return <div className="col-md-1">{t}</div>;
          })}
        </div>

        {/* menampilkan jadwal */}
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    );
  }
}
