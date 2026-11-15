
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useColorScheme } from "nativewind";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSocialAuth from "../hooks/useSocialAuth";

export default function SignInScreen() {
  const { colorScheme } = useColorScheme();
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  const isGoogleClicked = loadingStrategy === "oauth_google";
  const isAppleClicked = loadingStrategy === "oauth_apple";
  const isGitHubClicked = loadingStrategy === "oauth_github";

  const isLoading =
    isAppleClicked || isGitHubClicked || isGoogleClicked;

  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView
    edges={["top"]}
      className="flex-1"
      style={{
        backgroundColor: isDark ? "#253C30" : "#22C55E",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="flex-1 pt-4">

          {/* Decorative elements */}
          <View className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary/80 dark:bg-primary/40" />

          <View className="absolute right-[-74px] top-40 h-72 w-72 rounded-full bg-primary/70 dark:bg-primary/35" />

          {/* Branding */}
          <View className="px-6">
            <Text className="text-center text-5xl font-extrabold tracking-tight text-primary-foreground uppercase font-mono dark:text-foreground">
              Grocify
            </Text>

            <Text className="mt-1 text-center text-[14px] text-primary-foreground/80 dark:text-foreground/75">
              Plan smarter. Shop happier.
            </Text>
          </View>

          {/* Hero image */}
          <View className="mt-4 px-5">
            <View className="rounded-[30px] border border-white/20 bg-white/10 p-1">
              <Image
                source={require("../../../assets/images/auth.png")}
                style={{
                  width: "100%",
                  height: 320,
                }}
                contentFit="contain"
              />
            </View>
          </View>

          {/* Authentication section */}
          <View className="mt-8 flex-1 rounded-t-[36px] bg-card px-6 pb-8 pt-6">

            <View className="self-center rounded-full bg-secondary px-3 py-1">
              <Text className="text-xs font-semibold uppercase tracking-[1px] text-secondary-foreground">
                Welcome Back
              </Text>
            </View>

            <Text className="mt-2 text-center text-sm leading-6 text-muted-foreground">
              Choose a social provider and jump right into your personalized grocery experience.
            </Text>

            <View className="mt-6">

              {/* Google */}
              <Pressable
                className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border bg-card px-4 active:opacity-90 ${
                  isLoading ? "opacity-70" : ""
                }`}
                disabled={isLoading}
                onPress={() => handleSocialAuth("oauth_google")}
              >
                <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
                  <Image
                    source={require("../../../assets/images/google.png")}
                    style={{ width: 20, height: 20 }}
                    contentFit="contain"
                  />
                </View>

                <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
                  {isGoogleClicked
                    ? "Connecting Google..."
                    : "Continue with Google"}
                </Text>

                <FontAwesome
                  name="angle-right"
                  size={18}
                  color="#5f6e66"
                />
              </Pressable>

              {/* GitHub */}
              <Pressable
                className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border bg-card px-4 active:opacity-90 ${
                  isLoading ? "opacity-70" : ""
                }`}
                disabled={isLoading}
                onPress={() => handleSocialAuth("oauth_github")}
              >
                <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
                  <FontAwesome
                    name="github"
                    size={24}
                    color="#111"
                  />
                </View>

                <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
                  {isGitHubClicked
                    ? "Connecting GitHub..."
                    : "Continue with GitHub"}
                </Text>

                <FontAwesome
                  name="angle-right"
                  size={18}
                  color="#5f6e66"
                />
              </Pressable>

              {/* Apple */}
              <Pressable
                className={`mb-3 h-14 flex-row items-center rounded-2xl border border-foreground bg-foreground px-4 active:opacity-90 ${
                  isLoading ? "opacity-70" : ""
                }`}
                disabled={isLoading}
                onPress={() => handleSocialAuth("oauth_apple")}
              >
                <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
                  <FontAwesome6
                    name="apple"
                    size={22}
                    color="#111"
                  />
                </View>

                <Text className="ml-3 flex-1 text-lg font-semibold text-background">
                  {isAppleClicked
                    ? "Connecting Apple..."
                    : "Continue with Apple"}
                </Text>

                <FontAwesome
                  name="angle-right"
                  size={18}
                  color="#5f6e66"
                />
              </Pressable>

            </View>

            {/* Terms */}
            <Text className="mt-3 text-center text-sm leading-5 text-muted-foreground">
              By continuing, you agree to our Terms and Privacy Policy.
            </Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
