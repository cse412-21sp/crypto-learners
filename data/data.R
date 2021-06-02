library(dplyr)

etc <- read.csv("etc.csv")
btc <- read.csv("btc.csv")
eth <- read.csv("eth.csv")
xrp <- read.csv("xrp.csv")
doge <- read.csv("doge.csv")
coin <- read.csv("coin.csv")
nasdaq <- read.csv("nasdaq.csv")
s_and_p <- read.csv("s&p500.csv")


select_date_high_low <- function(df) {
  df <- df %>% 
    select(Date, High, Low)
  return (df)
}

etc <- select_date_high_low(etc)
btc <- select_date_high_low(btc)
xrp <- select_date_high_low(xrp)
eth <- select_date_high_low(eth)
doge <- select_date_high_low(doge)


nasdaq <- nasdaq %>% 
  select(Date, High_nasdaq, Low_nasdaq)

s_and_p <- s_and_p %>% 
  select(Date, High_s_and_p, Low_s_and_p)

etc <- etc %>% 
  rename(High_etc = High, Low_etc = Low)

btc <- btc %>% 
  rename(High_btc = High, Low_btc = Low)

xrp <- xrp %>% 
  rename(High_xrp = High, Low_xrp = Low)

eth <- eth %>% 
  rename(High_eth = High, Low_eth = Low)

doge <- doge %>% 
  rename(High_doge = High, Low_doge = Low)

coin_data <- full_join(etc, btc, by = "Date")
coin_data <- full_join(coin_data, xrp, by = "Date")
coin_data <- full_join(coin_data, doge, by = "Date")
coin_data <- full_join(coin_data, eth, by = "Date")

coin_data <- left_join(s_and_p, coin, by="Date")
coin_data <- left_join(nasdaq, coin_data, by="Date")

coin_data <- coin_data %>% 
  select(-X)

nasdaq['diff'] <- nasdaq$High_nasdaq - nasdaq$Low_nasdaq
s_and_p['diff'] <- as.numeric(s_and_p$High_s_and_p) - as.numeric(s_and_p$Low_s_and_p)

btc['diff'] <- btc$High - btc$Low
eth['diff'] <- eth$High - eth$Low

normalize_data <- function(df) {
  min <-  min(df)
  max <-  max(df)
  x <-  df 
  y = (x - min) / (max - min)
  return (y)
}

btc['norm'] = normalize_data(btc$diff)
eth['norm'] = normalize_data(eth$diff)

write.csv(btc, "btc_norm.csv")
write.csv(eth, "eth_norm.csv")
write.csv(nasdaq, "nasdaq_norm.csv")
