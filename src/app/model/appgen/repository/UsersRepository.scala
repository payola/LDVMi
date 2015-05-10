package model.appgen.repository

import model.appgen.entity.{User, UserId, Users}
import org.virtuslab.unicorn.LongUnicornPlay._
import org.virtuslab.unicorn.LongUnicornPlay.driver.simple._

/**
 * Repository for users.
 *
 * It brings all base service methods with it from [[BaseIdRepository]], but you can add yours as well.
 *
 * Use your favourite DI method to instantiate it in your application.
 */
class UsersRepository extends BaseIdRepository[UserId, User, Users](TableQuery[Users])