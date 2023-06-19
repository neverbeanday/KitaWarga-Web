import {
    // NotFound,
    // AssetsProducts,
    BlockUserID,
    BondsBuy,
    BondsBuyDetail,
    BondsDetail,
    BondsSell,
    BrowserNotSupported,
    Cart,
    CashOnCall,
    ChangePassword,
    ChangePasswordEStatement,
    ChangeToken,
    CreditCardApplySupplementary,
    CreditCardDetail,
    CreditCardPaybills,
    CurrentAccountDetail,
    DashboardHome,
    // DesignSystem,
    DownloadEStatement,
    Error404,
    Error999,
    ForceChangePassword,
    ForgotUserIdPassword,
    // Home,
    KeranjangSuccess,
    // LoginEmbed,
    Logout,
    MobileCash,
    ModifyTimeDeposit,
    MortgageDetail,
    MutualFunds,
    MutualFundsBuy,
    MutualFundsDetail,
    MutualFundsNewDetail,
    MutualFundsSell,
    MutualFundsSwitch,
    MutualSimplePay,
    NewLogin,
    OnBoarding,
    OpenNewTimeDeposit,
    OpenTimeDeposit,
    // PagesList,
    PayBills,
    PaybillsWithCc,
    // PaymentReceipt,
    PermataStore,
    Personalization,
    PersonalLoanDetail,
    PhysicalCardActivation,
    PnetPay,
    PpmdDetail,
    RegistrationEStatement,
    // RegistrationEStatementReceipt,
    RegistrationSmsNavigator,
    RegistrationValas,
    RemovePermataSMSNavigator,
    SavingDetail,
    ServiceChangeAddress,
    SetAsFavorite,
    SimplePayCreditCard,
    TimeDepositDetail,
    Topup,
    Transfer,
    // TransferReceipt,
    ValasDinamisDetail,
    WhatCanIDo,
    WhatIHave,
    CreditCardIncreaseTemporaryLimit,
    SettingTransactionTransfer,
    SettingTransactionPaybills,
    // Loader
    // Insight,
    FavoritePaybills,
    FavoriteTopup,
    FavoriteTransfer,
    RdnWithdrawal,
    SbnEarlyRedemption,
    // OrderSbn,
    // Ksei,
    // KseiDetail,
    BuySbn,
    OrderStatus,
    //KeranjangFailed,
    RegistrationKsei,
    ConnectSbn,
    CreditCardCreateUpdatePin,
    RegistrationSidBonds,
    BlockCreditCard
  } from "container/pages";
  
  import * as Routes from './Routes';
  
  const AppRoutes = [
    // {
    //   id: 1,
    //   path: '/old-login',
    //   component: Home,
    //   exact: true
    // },
    {
      id: 2,
      path: "/personalization",
      component: Personalization,
      exact: true
    },
    {
      id: 3,
      path: "/dashboard/home",
      component: DashboardHome,
      exact: true
    },
    {
      id: 4,
      path: "/saving-detail/:currency",
      component: SavingDetail,
      exact: true
    },
    {
      id: 5,
      path: "/credit-card-detail",
      component: CreditCardDetail,
      exact: true
    },
    {
      id: 51,
      path: "/credit-card-paybills",
      component: CreditCardPaybills,
      exact: true
    },
    {
      id: 6,
      path: "/mutual-funds/:currency",
      component: MutualFunds,
      exact: true
    },
    {
      id: 7,
      path: "/mutual-funds-detail/:productCode",
      component: MutualFundsDetail,
      exact: true
    },
    {
      id: 8,
      path: "/current-account-detail/:currency",
      component: CurrentAccountDetail,
      exact: true
    },
    {
      id: 9,
      path: "/bonds-detail/:currency",
      component: BondsDetail,
      exact: true
    },
    {
      id: 10,
      path: "/time-deposit-detail/:currency",
      component: TimeDepositDetail,
      exact: true
    },
    {
      id: 11,
      path: "/personal-loan-detail",
      component: PersonalLoanDetail,
      exact: true
    },
    {
      id: 12,
      path: "/mortgage-detail",
      component: MortgageDetail,
      exact: true
    },
    {
      id: 13,
      path: "/dashboard/accounts",
      component: WhatIHave,
      exact: true
    },
    {
      id: 14,
      path: "/dashboard/services",
      component: WhatCanIDo,
      exact: true
    },
    // {
    //   id: 15,
    //   path: '/login-embed',
    //   component: LoginEmbed,
    //   exact: true
    // },
    {
      id: 16,
      path: "/ppmd-detail/:id/:currency",
      component: PpmdDetail,
      exact: true
    },
    {
      id: 17,
      path: "/valas-dinamis-detail/:id/:currency",
      component: ValasDinamisDetail,
      exact: true
    },
    {
      id: 18,
      path: "/registration-valas",
      component: RegistrationValas,
      exact: true
    },
    {
      id: 21,
      path: "/forgot-user-id-password",
      component: ForgotUserIdPassword,
      exact: true
    },
    {
      id: 22,
      path: "/change-password",
      component: ChangePassword,
      exact: true
    },
    {
      id: 23,
      path: "/change-token",
      component: ChangeToken,
      exact: true
    },
    {
      id: 24,
      path: "/logout",
      component: Logout,
      exact: true
    },
    {
      id: 25,
      path: "/on-boarding",
      component: OnBoarding,
      exact: true
    },
    {
      id: 26,
      path: "/transfer",
      component: Transfer,
      exact: true
    },
    // {
    //   id: 2600,
    //   path: '/transfer#mobilenumber',
    //   component: Transfer,
    //   exact: true
    // },
    // {
    //   id: 2601,
    //   path: '/transfer#ownaccount',
    //   component: Transfer,
    //   exact: true
    // },
    // {
    //   id: 2602,
    //   path: '/transfer#accountnumber',
    //   component: Transfer,
    //   exact: true
    // },
    // {
    //   id: 2603,
    //   path: '/transfer#whatsappgift',
    //   component: Transfer,
    //   exact: true
    // },
    {
      id: 27,
      path: "/set-as-favorite",
      component: SetAsFavorite,
      exact: true
    },
    {
      id: 28,
      path: "/pay-bills",
      component: PayBills,
      exact: true
    },
    {
      id: 29,
      path: "/top-up",
      component: Topup,
      exact: true
    },
    {
      id: 30,
      path: "/modify-time-deposit",
      component: ModifyTimeDeposit,
      exact: true
    },
    {
      id: 31,
      path: "/activate-physical-card",
      component: PhysicalCardActivation,
      exact: true
    },
    {
      id: 32,
      path: "/mobile-cash",
      component: MobileCash,
      exact: true
    },
    {
      id: 33,
      path: "/bonds-buy",
      component: BondsBuy,
      exact: true
    },
    {
      id: 34,
      path: "/cart-success",
      component: KeranjangSuccess,
      exact: true
    },
    {
      id: 35,
      path: "/registration-sms-navigator",
      component: RegistrationSmsNavigator,
      exact: true
    },
    {
      id: 36,
      path: "/change-password-e-statement",
      component: ChangePasswordEStatement,
      exact: true
    },
    {
      id: 37,
      path: "/registration-e-statement",
      component: RegistrationEStatement,
      exact: true
    },
    {
      id: 38,
      path: "/remove-permata-sms-navigator",
      component: RemovePermataSMSNavigator,
      exact: true
    },
    {
      id: 39,
      path: "/bonds-sell",
      component: BondsSell,
      exact: true
    },
    {
      id: 40,
      path: "/force-change-password",
      component: ForceChangePassword,
      exact: true
    },
    {
      id: 41,
      path: "/block-user-ID",
      component: BlockUserID,
      exact: true
    },
    {
      id: 42,
      path: "/permata-store",
      component: PermataStore,
      exact: true
    },
    {
      id: 43,
      path: '/favorite-transfer',
      component: FavoriteTransfer,
      exact: true
    },
    // {
    //   path: '/notification',
    //   component: Notification,
    //   exact: true
    // },
    {
      id: 44,
      path: "/setting-transaction-transfer",
      component: SettingTransactionTransfer,
      exact: true
    },
    {
      id: 45,
      path: "/setting-transaction-paybills",
      component: SettingTransactionPaybills,
      exact: true
    },
    {
      id: 44,
      path: '/favorite-paybills',
      component: FavoritePaybills,
      exact: true
    },
    {
      id: 45,
      path: '/favorite-topup',
      component: FavoriteTopup,
      exact: true
    },
    {
      id: 46,
      path: '/sbn-early-redemption',
      component: SbnEarlyRedemption,
      exact: true
    },
    // {
    //   id: 47,
    //   path: '/order-sbn',
    //   component: OrderSbn,
    //   exact: true
    // },
    {
      id: 48,
      path: '/order-sbn',
      component: BuySbn,
      exact: true
    },
    {
      id: 49,
      path: '/order-status',
      component: OrderStatus,
      exact: true
    },
    // {
    //   id: 90,
    //   path: '/topup-receipt',
    //   component: TopupReceipt,
    //   exact: true
    // },
    // {
    //   id: 91,
    //   path: '/payment-receipt',
    //   component: PaymentReceipt,
    //   exact: true
    // },
    // {
    //   id: 92,
    //   path: '/transfer-receipt',
    //   component: TransferReceipt,
    //   exact: true
    // },
    // {
    //   id: 93,
    //   path: '/transfer-receipt',
    //   component: TransferReceipt,
    //   exact: true
    // },
    // {
    //   id: 94,
    //   path: '/registration-e-statement-receipt',
    //   component: RegistrationEStatementReceipt,
    //   exact: true
    // },
    // {
    //   id: 44,
    //   path: '/favorite-paybills',
    //   component: FavoritePaybills,
    //   exact: true
    // },
    // {
    //   id: 45,
    //   path: '/favorite-topup',
    //   component: FavoriteTopup,
    //   exact: true
    // },
    // {
    //   id: 46,
    //   path: '/sbn-early-redemption',
    //   component: SbnEarlyRedemption,
    //   exact: true
    // },
    // {
    //   id: 47,
    //   path: '/order-sbn',
    //   component: OrderSbn,
    //   exact: true
    // },
    {
      id: 48,
      path: "/buy-sbn",
      component: BuySbn,
      exact: true
    },
    {
      id: 49,
      path: "/order-status",
      component: OrderStatus,
      exact: true
    },
    // {
    //   id: 50,
    //   path: '/cart-failed',
    //   component: KeranjangFailed,
    //   exact: true
    // },
    // {
    //   id: 90,
    //   path: '/topup-receipt',
    //   component: TopupReceipt,
    //   exact: true
    // },
    // {
    //   id: 91,
    //   path: '/payment-receipt',
    //   component: PaymentReceipt,
    //   exact: true
    // },
    // {
    //   id: 92,
    //   path: '/transfer-receipt',
    //   component: TransferReceipt,
    //   exact: true
    // },
    // {
    //   id: 93,
    //   path: '/transfer-receipt',
    //   component: TransferReceipt,
    //   exact: true
    // },
    // {
    //   id: 94,
    //   path: '/registration-e-statement-receipt',
    //   component: RegistrationEStatementReceipt,
    //   exact: true
    // },
    {
      id: 98,
      path: "/mutual-funds-switch",
      component: MutualFundsSwitch,
      exact: true
    },
    // {
    //   id: 99,
    //   path: '/not-found',
    //   component: Home,
    //   exact: true
    // },
    // {
    //   id: 100,
    //   path: '/assets-products',
    //   component: AssetsProducts,
    //   exact: true
    // },
    // {
    //   id: 101,
    //   path: '/pages-list',
    //   component: PagesList,
    //   exact: true
    // },
    // {
    //   id: 102,
    //   path: '/design-system/introduction',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 103,
    //   path: '/design-system/content',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 104,
    //   path: '/design-system/layout',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 105,
    //   path: '/design-system/basic-visual',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 106,
    //   path: '/design-system/atoms',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 107,
    //   path: '/design-system/molecules',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 108,
    //   path: '/design-system/organisms',
    //   component: DesignSystem,
    //   exact: true
    // },
    {
      id: 109,
      path: "/mutual-funds-sell",
      component: MutualFundsSell,
      exact: true
    },
    {
      id: 110,
      path: "/mutual-funds-buy",
      component: MutualFundsBuy,
      exact: true
    },
    {
      id: 1116,
      path: "/cart",
      component: Cart,
      exact: true
    },
    {
      id: 112,
      path: "/simple-pay",
      component: SimplePayCreditCard,
      exact: true
    },
    {
      id: 115,
      path: "/cash-on-call",
      component: CashOnCall,
      exact: true
    },
    {
      id: 116,
      path: "/pay-bills-with-cc",
      component: PaybillsWithCc,
      exact: true
    },
    {
      id: 117,
      path: "/service-change-address",
      component: ServiceChangeAddress,
      exact: true
    },
    {
      id: 118,
      path: "/force-change-password",
      component: ForceChangePassword,
      exact: true
    },
    {
      id: 119,
      path: "/",
      component: NewLogin,
      exact: true
    },
    {
      id: 404,
      path: "/error-404",
      component: Error404,
      exact: true
    },
    {
      id: 999,
      path: "/error-999",
      component: Error999,
      exact: true
    },
    // {
    //   id: 500,
    //   path: '/error-500',
    //   component: Error500,
    //   exact: true
    // },
    {
      id: 600,
      path: "/browser-not-supported",
      component: BrowserNotSupported,
      exact: true
    },
    // {
    //   id: 601,
    //   path: '/mutual-funds-receipt',
    //   component: MutualFundsReceipt,
    //   exact: true
    // },
    // {
    //   id: 602,
    //   path: '/bonds-receipt',
    //   component: BondsReceipt,
    //   exact: true
    // },
    // {
    //   id: 603,
    //   path: '/bonds-sell-receipt',
    //   component: BondsSellReceipt,
    //   exact: true
    // },
    // {
    //   id: 604,
    //   path: '/modify-time-deposit-aro-receipt',
    //   component: ModifyTimeDepositAROReceipt,
    //   exact: true
    // },
    // {
    //   id: 605,
    //   path: '/modify-time-deposit-non-aro-receipt',
    //   component: ModifyTimeDepositNonAROReceipt,
    //   exact: true
    // },
    // {
    //   id: 606,
    //   path: '/mutual-funds-sell-receipt',
    //   component: MutualFundsSellReceipt,
    //   exact: true
    // },
    {
      id: 607,
      path: "/open-time-deposit",
      component: OpenTimeDeposit,
      exact: true
    },
    // {
    //   id: 608,
    //   path: '/open-time-deposit-receipt',
    //   component: OpenTimeDepositReceipt,
    //   exact: true
    // },
    {
      id: 609,
      path: "/pnet-pay",
      component: PnetPay,
      exact: true
    },
    // {
    //   id: 610,
    //   path: '/pnet-pay-receipt',
    //   component: PnetPayReceipt,
    //   exact: true
    // },
    // Routes for new design systemo
    // {
    //   id: 300,
    //   path: '/design-system/colors',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 301,
    //   path: '/design-system/iconography',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 303,
    //   path: '/design-system/avatar',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 304,
    //   path: '/design-system/breadcrumbs',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 305,
    //   path: '/design-system/field',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 306,
    //   path: '/design-system/form-stepper',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 307,
    //   path: '/design-system/progress-bar',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 308,
    //   path: '/design-system/button',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 309,
    //   path: '/design-system/logo',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 310,
    //   path: '/design-system/typography',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 311,
    //   path: '/design-system/numpads',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 312,
    //   path: '/design-system/pattern',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 313,
    //   path: '/design-system/dropdown',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 314,
    //   path: '/design-system/form',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 315,
    //   path: '/design-system/footer',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 315,
    //   path: '/design-system/checkbox-toggle',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 316,
    //   path: '/design-system/header',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 317,
    //   path: '/design-system/upload-area',
    //   component: DesignSystem,
    //   exact: true
    // },
    // {
    //   id: 318,
    //   path: '/mutual-funds-switch-receipt',
    //   component: MutualFoundsSwitchReceipt,
    //   exact: true
    // },
    {
      id: 319,
      path: "/download-e-statement",
      component: DownloadEStatement,
      exact: true
    },
    {
      id: 320,
      path: "/mutual-simple-pay",
      component: MutualSimplePay,
      exact: true
    },
    {
      id: 321,
      path: "/credit-card-apply-supplementary",
      component: CreditCardApplySupplementary,
      exact: true
    },
    // {
    //   id: 322,
    //   path: '/simple-pay-receipt',
    //   component: SimplePayReceipt,
    //   exact: true
    // },
    {
      id: 323,
      path: "/new-time-deposit",
      component: OpenNewTimeDeposit,
      exact: true
    },
    {
      id: 324,
      path: '/registration-ksei',
      component: RegistrationKsei,
      exact: true
    },
    {
      id: 325,
      path: "/bonds-buy-detail",
      component: BondsBuyDetail,
      exact: true
    },
    {
      id: 326,
      path: "/mutual-funds-new-detail",
      component: MutualFundsNewDetail,
      exact: true
    },
    {
      id: 325,
      path: "/connect-sbn",
      component: ConnectSbn,
      exact: true
    },
    // {
    //   id: 326,
    //   path: '/sbn-detail',
    //   component: ConnectSbnDetail,
    //   exact: true
    // },
    {
      id: 327,
      path: "/credit-card-increase-temporary-limit",
      component: CreditCardIncreaseTemporaryLimit,
      exact: true
    },
    {
      id: 328,
      path: '/rdn-withdrawal',
      component: RdnWithdrawal,
      exact: true
    },
    // {
    //   id: 326,
    //   path: '/dashboard/insight',
    //   component: Insight,
    //   exact: true
    // },
    // {
    //   id: 329,
    //   path: '/ksei-detail',
    //   component: Ksei,
    //   exact: true
    // },
    // {
    //   id: 330,
    //   path: '/ksei-detail-saldo',
    //   component: KseiDetail,
    //   exact: true
    // }
    {
      id: 331,
      path: Routes.CreditCardCreateUpdatePin,
      component: CreditCardCreateUpdatePin,
      exact: true
    },
    {
      id: 332,
      path: Routes.RegistrationSid,
      component: RegistrationSidBonds,
      exact: true
    },
    {
      id: 61,
      path: Routes.BlockCreditCard,
      component: BlockCreditCard,
      exact: true
    }
  ];
  
  export default AppRoutes;
  