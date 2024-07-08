<script setup >
import { ref } from 'vue'
import { showToast } from 'vant'
import { showSuccessToast, showFailToast } from 'vant'

const showDialog = ref(false)

const zhouIndex = ref(0)

const dayIndex = ref(0)

const tableHeadList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

const phoneNumber = ref()

const username = ref()

const timeList = [
  {
    time: '08:00-08:30',
    can: true
  },
  {
    time: '08:30-09:00',
    can: false
  },
  {
    time: '09:00-09:30',
    can: true
  },
  {
    time: '09:30-10:00',
    can: false
  },
  {
    time: '10:00-10:30',
    can: true
  }
]

const changeWeekIndex = (index) => {
  zhouIndex.value = index
}

const handleReservation = (item) => {
  if (item.can) {
    showDialog.value = true
  } else {
    showToast('当前时间段已经有人预约啦')
  }
}

const onSubmit=()=>{

}
</script>

<template>
  <div class="content">
    <div class="zhou">
      <div class="zhouItem" :class="{ bechoose: zhouIndex == 0 }" @click="changeWeekIndex(0)">
        本周
      </div>
      <div class="zhouItem" :class="{ bechoose: zhouIndex == 1 }" @click="changeWeekIndex(1)">
        下周
      </div>
    </div>
    <div class="day">
      <div
        class="dayItem"
        v-for="(item, index) in tableHeadList"
        :key="index"
        :class="{ bechoose: dayIndex == index }"
        @click="dayIndex = index"
      >
        {{ item }}
      </div>
    </div>
    <div class="tiemBox">
      <van-cell
        :title="item.time"
        is-link
        :class="item.can ? 'can-reservation' : ''"
        :value="item.can ? '可预约' : '已约'"
        v-for="(item, index) in timeList"
        :key="index"
        @click="handleReservation(item)"
      />
    </div>
  </div>
  <van-dialog v-model:show="showDialog" title="预约" :showConfirmButton="false" >
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="phoneNumber"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </van-dialog>
</template>


<style lang="less" scoped>
span {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.zhou {
  display: flex;
  height: 50px;
  margin-bottom: 10px;

  .zhouItem {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
  }
}

.day {
  display: flex;

  height: 50px;

  .dayItem {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
  }
}

.tiemBox {
  height: 50vh;

  .van-cell {
    &.can-reservation {
      :deep(.van-cell__value) {
        color: rgb(32, 201, 173);
      }
    }
  }
}

.bechoose {
  background-color: rgb(32, 201, 173);
  color: #fff;
}
</style>