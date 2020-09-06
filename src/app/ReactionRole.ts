import Nano from "nano-bot"
import Discord from "discord.js"
import * as types from "../utils/types"
import ReactionRoleMessage from "./ReactionRoleMessage"

export default class ReactionRole {
  role: Discord.Role
  emoji: Discord.EmojiResolvable

  constructor(
    public options: types.ReactionRoleOptions,
    public reactionRoleMessage: ReactionRoleMessage
  ) {
    this.role = reactionRoleMessage.channel.guild.roles.cache.get(
      options.roleID
    ) as Discord.Role
    this.emoji =
      Nano.Globals.client.emojis.cache.get(options.emojiID) || options.emojiID
  }
}
