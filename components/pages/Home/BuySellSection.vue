<template>
  <section class="buy-sell">
    <div class="container">
      <div class="row">
        <div class="col px-0 d-flex align-items-center">
          <div class="left-part">
            <div class="title">
              Mua & Bán tiền mã <br />
              hoá chỉ trong vài phút
            </div>
            <div class="message">
              Tham gia sàn giao dịch tiền mã hoá nhanh chóng và an toàn nhất
              <br />
              Việt Nam
            </div>
            <div class="button">
              <button>Khám phá</button>
            </div>
          </div>
        </div>
        <div class="col px-0">
          <div class="right-part ratio">
            <img src="@/static/image/illustration.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.buy-sell {
  background: #fafafa;
  .container {
    max-width: 1440px;
    .row {
      .col {
        .left-part {
          padding: 68px 0px;
          .title {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
            line-height: 59px;
            color: #000000;
          }
          .message {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #51525c;
            padding: 8px 0px 32px;
          }
          .button {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #18181b;
            button {
              padding: 14px 78px;
              background: #faac2e;
              border-radius: 8px;
              border: none;
            }
          }
        }
      }
      .right-part {
        --bs-aspect-ratio: 64.086%;
      }
    }
  }
}
</style>
