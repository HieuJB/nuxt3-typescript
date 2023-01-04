<template>
  <section class="choose-vinex-section">
    <div class="container px-0">
      <div class="choose-vinex">
        <div class="reason-top">
          <span class="question">Tại sao chọn VinEx?</span>
          <span class="answer"
            >Chúng tôi cung cấp cho bạn sự an toàn, hiệu quả và đa dạng.</span
          >
        </div>
        <div class="reason-bottom">
          <div class="row">
            <div class="col">
              <div class="reason-content">
                <div class="image">
                  <div class="ratio">
                    <img src="@/static/image/vinex-img001.png" />
                  </div>
                </div>
                <div class="info">
                  <div class="info__title">Nền tảng An toàn & Bảo mật</div>
                  <div class="info__content">
                    Tính bảo mật và ổn định tài chính hàng đầu trong ngành của
                    chúng tôi giúp giữ cho danh tính và tiền của bạn an toàn và
                    bảo mật.
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="reason-content">
                <div class="image">
                  <div class="ratio">
                    <img src="@/static/image/vinex-img001.png" />
                  </div>
                </div>
                <div class="info">
                  <div class="info__title">Nền tảng An toàn & Bảo mật</div>
                  <div class="info__content">
                    Tính bảo mật và ổn định tài chính hàng đầu trong ngành của
                    chúng tôi giúp giữ cho danh tính và tiền của bạn an toàn và
                    bảo mật.
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="reason-content">
                <div class="image">
                  <div class="ratio">
                    <img src="@/static/image/vinex-img001.png" />
                  </div>
                </div>
                <div class="info">
                  <div class="info__title">Nền tảng An toàn & Bảo mật</div>
                  <div class="info__content">
                    Tính bảo mật và ổn định tài chính hàng đầu trong ngành của
                    chúng tôi giúp giữ cho danh tính và tiền của bạn an toàn và
                    bảo mật.
                  </div>
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
.choose-vinex-section {
  .container {
    max-width: 1440px;
    .choose-vinex {
      .reason-top {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
        .question {
          padding-top: 64px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 44px;
          color: #18181b;
        }
        .answer {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #51525c;
        }
      }
      .reason-bottom {
        .row {
          .col {
            .reason-content {
              .image {
                padding: 0px 20px 16px;
                --bs-aspect-ratio: 62.255%;
              }
              .info {
                display: flex;
                flex-direction: column;
                gap: 16px;
                &__title {
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 28px;
                  text-align: center;
                  color: #000000;
                }
                &__content {
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  text-align: center;
                  color: #70707b;
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
