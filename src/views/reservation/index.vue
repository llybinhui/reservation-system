<script setup></script>

<template>
  <div>
    <h1>预约</h1>

    <section>
      <table>
        <thead>
          <tr>
            <th>/</th>
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
            <th>周六</th>
            <th>周日</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row" v-for="item in 11" :key="item">
            <td>08:00-9:30</td>
            <td>可预约</td>
            <td>可预约</td>
            <td>可预约</td>
            <td>可预约</td>
            <td>可预约</td>
            <td>已预约</td>
            <td>可预约</td>
          </tr>
        </tbody>
      </table>
    </section>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<style scoped lang="less">
section {
  table {
    width: 100%;
    border-collapse: collapse;

    td {
      border: 1px solid #000;
      padding: 8px;
      text-align: center;
    }

    th {
      background-color: #f2f2f2;
    }

    .row {
      background-color: #f9f9f9;
    }
  }
}
</style>
