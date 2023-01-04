<template>
  <section class="partner-section">
    <div class="container px-0">
      <div class="partner">
        <div class="partner-top">
          <div class="partner-top__title">
            Đối tác đáng tin cậy cho hành trình của bạn
          </div>
          <div class="partner-top__message">Giao dịch bằng VND với phí 0đ</div>
        </div>
        <div class="partner-content">
          <div class="row">
            <div class="col">
              <div class="block">
                <div class="block-icon">
                  <img src="@/static/image/recovery-convert.png" />
                </div>
                <div class="block-title">Mua/bán bằng VND</div>
                <div class="block-content">
                  Tính bảo mật và ổn định tài chính hàng đầu trong ngành của
                  chúng tôi giúp giữ cho danh tính và tiền của bạn an toàn và
                  bảo mật.
                </div>
                <div class="block-button">
                  <button>Giao dich ngay</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="block">
                <div class="block-icon">
                  <img src="@/static/image/percentage-square.svg" />
                </div>
                <div class="block-title">Phí giao dịch thấp nhất</div>
                <div class="block-content">
                  VinEX dẫn đầu với phí giao dịch thấp và chương trình VIP hấp
                  dẫn. Hãy tận hưởng mức phí giao dịch thấp nhất thị trường.
                </div>
                <div class="block-button">
                  <button>Giao dich ngay</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="block">
                <div class="block-icon">
                  <img src="@/static/image/shield-security.png" />
                </div>
                <div class="block-title">Bảo mật cao</div>
                <div class="block-content">
                  Các biện pháp bảo mật cao cấp cùng cùng quỹ sàn của VinEX sẽ
                  bảo vệ dữ liệu và tài sản của bạn trước rủi ro.
                </div>
                <div class="block-button">
                  <button>Giao dich ngay</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="block">
                <div class="block-icon">
                  <img src="@/static/image/24-support.png" />
                </div>
                <div class="block-title">Hỗ trợ khách hàng 24/7</div>
                <div class="block-content">
                  Đội ngũ hỗ trợ nhiều kinh nghiệm của VinEX luôn túc trực 24/7
                  để sẵn sàng trợ giúp bạn.
                </div>
                <div class="block-button">
                  <button>Giao dich ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partner-section {
  padding: 80px 0px;
  .container {
    max-width: 1440px;
    .partner {
      display: flex;
      flex-direction: column;
      gap: 40px;
      .partner-top {
        &__title {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 44px;
          display: flex;
          align-items: center;
          color: #18181b;
        }
        &__message {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #51525c;
        }
      }
      .partner-content {
        .row {
          .col {
            .block {
              display: flex;
              flex-direction: column;
              .block-title {
                padding: 24px 0px 12px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 28px;
                display: flex;
                align-items: center;
                color: #000000;
              }
              .block-content {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: #70707b;
                padding-bottom: 24px;
              }
              .block-button {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #18181b;
                button {
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  padding: 10px 16px;
                  background: #e4e4e7;
                  border-radius: 8px;
                  border: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
