import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";
import moment from 'moment'; // 2.22.2


const NOTIFICATION_KEY = "Udacicards:notify";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Study for your quiz!",
    body: "👋 Don't forget to study for your quizzes today!",
    ios: { sound: true },
    android: { sound: true, priority: "high", sticky: false, vibrate: true }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let r = (new Date()).getTime() + 120000;

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: r,
              repeat: "day"
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});